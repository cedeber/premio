use rayon::prelude::*;

fn fibonacci(n: u32) -> u32 {
    match n {
        0..=1 => 1,
        _ => fibonacci(n - 1) + fibonacci(n - 2),
    }
}

pub fn sum() -> u32 {
    let input: [u32; 40] = (1..=40).collect::<Vec<_>>().try_into().unwrap();
    let response: u32 = input.iter().map(|&i| fibonacci(i)).sum();
    response
}

pub fn par_sum() -> u32 {
    let input: [u32; 40] = (1..=40).collect::<Vec<_>>().try_into().unwrap();
    let response: u32 = input.par_iter().map(|&i| fibonacci(i)).sum();
    response
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn single_thread() {
        assert_eq!(433494435, sum());
    }

    #[test]
    fn multi_thread() {
        assert_eq!(433494435, par_sum());
    }
}
