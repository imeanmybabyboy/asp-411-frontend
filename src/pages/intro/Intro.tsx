import "./ui/Intro.css";

export default function Intro() {
    return (
        <>
            <div className="text-center">
                <h1 className="display-4">Introduction</h1>
            </div>

            <h2>ASP</h2>
            <p>
                Active server page (ASP) - websites creation technology with
                active server pages
            </p>

            <p>
                Tag-helpers are additional special constructions that make
                markup adaptive to codes and templates.
                <code>
                    &lt;a asp-controller="Home" asp-action="Intro" /&gt;
                </code>
            </p>
        </>
    );
}
