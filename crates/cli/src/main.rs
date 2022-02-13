use console::{style, Term};
use std::io::Result;
use std::time::Instant;

fn report(f: &dyn Fn() -> u32) -> Result<()> {
    let term = Term::stdout();

    let start = Instant::now();
    let res = f();
    let end = Instant::now();
    let delta = end.duration_since(start).as_millis();
    let output = format!("{} {}", res, style(format!("{delta}ms")).bold().blue());

    term.write_line(&output)?;

    Ok(())
}

fn main() -> Result<()> {
    report(&sum::sum)?;
    report(&sum::par_sum)?;

    Ok(())
}
