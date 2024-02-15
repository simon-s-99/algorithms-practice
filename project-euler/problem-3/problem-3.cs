// euler project problem nr. 3

long number = 600851475143;
int largest_prime = 0;

for (int i = 2; i <= number;)
{
    if (number % i == 0)
    {
        largest_prime = i;
        number /= i;
    }
    else
    {
        i++;
    }
}

Console.WriteLine(largest_prime);
