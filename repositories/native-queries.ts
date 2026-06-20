export const monthlyStatForCurrentMonthSql = `
  with stats as (
    select
      to_char(date_trunc('month', exit_date),'YYYY-MM') as year_month,
      to_char(date_trunc('month', exit_date),'FMMonth YYYY') as month,
      count(*) as trades,
      count(*) filter (where return >= 0) as wins,
      count(*) filter (where return < 0) as losses,
      round(avg(return) filter (where return >= 0), 2) as avg_gain,
      round(avg(return) filter (where return < 0), 2) as avg_loss
    from trades
    where
      exit_date is not null
      and date_trunc('month', exit_date) >= date_trunc('month', current_date - interval '1 month')
    group by
      date_trunc('month', exit_date)
  )
  select
    year_month,
    month,
    trades,
    wins,
    losses,
    round(wins::numeric / nullif((wins + losses), 0) * 100, 2) as win_rate,
    avg_gain,
    avg_loss,
    round(avg_gain / abs(avg_loss), 2) as risk_reward,
    round(
      (avg_gain * wins) /
      nullif((abs(avg_loss) * losses), 0),
      2
    ) as edge
    from stats
  `;

export const monthlyDistributionorCurrentMonthSql = `
  with distribution as(
    select 
      to_char(date_trunc('month', exit_date),'YYYY-MM') as year_month,
      round(return_percent, 0) as return_percent,
      count(*) as number_of_trades
    from trades
    where 
    exit_date is not null
    and date_trunc('month', exit_date) >= date_trunc('month', current_date - interval '1 month')
    group by date_trunc('month', exit_date), round(return_percent, 0)
  )
  select
    year_month,
    json_agg(
      json_build_object(
        'returnPercent', return_percent,
        'numberOfTrades', number_of_trades
      )
      order by return_percent
    ) as distribution
  from distribution
  group by year_month
  `;
