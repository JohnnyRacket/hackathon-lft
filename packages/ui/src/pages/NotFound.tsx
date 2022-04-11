import { Blockquote, Title } from "@mantine/core";

const NotFound = () => {

    const quotes = [
        { quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", citation: "Martin Fowler" },
        { quote: "First, solve the problem. Then, write the code.", citation: "John Johnson" },
        { quote: "Experience is the name everyone gives to their mistakes.", citation: "Oscar Wilde" },
        { quote: " In order to be irreplaceable, one must always be different", citation: "Coco Chanel" },
        { quote: "Java is to JavaScript what car is to Carpet.", citation: "Chris Heilmann" },
        { quote: "Knowledge is power.", citation: "Francis Bacon" },
        { quote: "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.", citation: "Dan Salomon" },
        { quote: "Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.", citation: "Antoine de Saint-Exupery" },
        { quote: "Ruby is rubbish! PHP is phpantastic!", citation: "Nikita Popov" },
        { quote: " Code is like humor. When you have to explain it, it’s bad.", citation: "Cory House" },
        { quote: "Fix the cause, not the symptom.", citation: "Steve Maguire" },
        { quote: "Optimism is an occupational hazard of programming: feedback is the treatment.", citation: " Kent Beck" },
        { quote: "When to use iterative development? You should use iterative development only on projects that you want to succeed.", citation: "Martin Fowler" },
        { quote: "Simplicity is the soul of efficiency.", citation: "Austin Freeman" },
        { quote: "Before software can be reusable it first has to be usable.", citation: "Ralph Johnson" },
        { quote: "Make it work, make it right, make it fast.", citation: "Kent Beck" },
    ];

    const quote = quotes[Math.floor(Math.random() * quotes.length)];

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", height: "100%" }}>
            <Title order={1}>Page not found.</Title>
            <Blockquote cite={`– ${quote.citation}`}>
                {quote.quote}
            </Blockquote>
        </div>
    );
}

export default NotFound;