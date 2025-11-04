const changes = [
    [/A/g, "Α"],
    [/B/g, "Β"],
    [/E/g, "Ε"],
    [/H/g, "Η"],
    [/I/g, "Ι"],
    [/K/g, "Κ"],
    [/M/g, "Μ"],
    [/N/g, "Ν"],
    [/O/g, "Ο"],
    [/P/g, "Ρ"],
    [/T/g, "Τ"],
    [/X/g, "Χ"],
    [/Y/g, "Υ"],
    [/Z/g, "Ζ"],
]

function depseudise() {
    let text = document.getElementById("text-in").value;
    changes.forEach(([key, rep])=>text=text.replace(key, rep))
    document.getElementById("text-out").value = text;
    navigator.clipboard.writeText(text);
}
