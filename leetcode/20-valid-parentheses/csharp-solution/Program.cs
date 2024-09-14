using System.Security.Cryptography.X509Certificates;

namespace csharp_solution;

class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("Hello, World!");
    }
}

public class Solution
{
    public bool IsValid(string s)
    {
        Stack<char> stack = new();

        foreach (char c in s)
        {
            if (c == '(' || c == '[' || c == '{')
            {
                stack.Push(c);
            }
            else
            {
                if (stack.Count == 0)
                {
                    return false;
                }
                else
                {
                    char compare = stack.Pop();

                    if (c == ')' && compare == '(')
                    {
                        continue;
                    }
                    else if (c == ']' && compare == '[')
                    {
                        continue;
                    }
                    else if (c == '}' && compare == '{')
                    {
                        continue;
                    }
                    else
                    {
                        return false;
                    }
                }
            }
        }

        if (stack.Count == 0)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}