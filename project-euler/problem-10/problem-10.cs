// See https://aka.ms/new-console-template for more information

// find the sum of all primes under 2 million
// code below uses sieve of eratosthenes 

int input = 2000000; 

bool[] primes = new bool[input + 1];
for (int i = 0; i < primes.Length; i++) { primes[i] = true; }

for (int i = 2; i * i <= input; i++)
{
    if (primes[i])
    {
        for (int j = i * i; i <= input; j += i)
        {
            if (j < primes.Length) { primes[j] = false; }
            else { break; }
        }
    }
}

var numPrimes = new List<int>();

for (int i = 2; i <= input; i++)
{
    if (primes[i])
    {
        numPrimes.Add(i);
    }
}

long output = 0;
foreach (int i in numPrimes) { output += i; }

Console.WriteLine($"Sum of primes under {input} = {output}");
