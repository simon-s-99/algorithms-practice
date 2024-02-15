// See https://aka.ms/new-console-template for more information

int a = 0, b = 0, c = 0;

for (int i = 1; i < 998; i++)
{
    for (int j = 1; j < 998; j++)
    {
        for (int k = 1; k < 998; k++)
        {
            if (i + j + k == 1000)
            {
                // these if's could be put into one statement and 
                // separated with || (OR)
                if (Math.Pow(i, 2) + Math.Pow(j, 2) == Math.Pow(k, 2) ||
                    Math.Pow(k, 2) + Math.Pow(j, 2) == Math.Pow(i, 2) ||
                    Math.Pow(i, 2) + Math.Pow(k, 2) == Math.Pow(j, 2))
                {
                    a = i; b = j; c = k;
                }
            }
        }
    }
}

Console.WriteLine($"a={a} b={b} c={c}");
Console.WriteLine($"abc= {a * b * c}");
