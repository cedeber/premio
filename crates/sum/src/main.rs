use std::time::Instant;

fn report(f: &dyn Fn() -> u32) {
	let start = Instant::now();
	let res = f();
	let end = Instant::now();
	let delta = end.duration_since(start).as_millis();

	println!("{} {}ms", res, delta);
}

fn main() {
	report(&sum::sum);
	report(&sum::par_sum);
}
