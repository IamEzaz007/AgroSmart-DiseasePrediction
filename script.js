const cropDiseases = [
    {
        name: "Late Blight",
        symptoms: ["Yellowing leaves", "Leaf spots", "Stem rot", "Fruit lesions", "Blighted foliage"],
        organicCure: "Copper Fungicide - Spray organic copper fungicide to manage blight, especially in humid conditions."
    },
    {
        name: "Rice Blast",
        symptoms: ["Leaf spots", "Stem rot", "Moldy growth", "Yellowing leaves", "Stunted growth"],
        organicCure: "Neem Oil Spray - Use neem oil to prevent and treat rice blast by inhibiting fungal growth."
    },
    {
        name: "Wheat Rust",
        symptoms: ["Rust-colored spots", "Leaf spots", "Stunted growth", "Blighted foliage", "Powdery mildew"],
        organicCure: "Sulfur Dust - Apply sulfur dust to wheat plants to control rust."
    },
    {
        name: "Powdery Mildew",
        symptoms: ["Powdery mildew", "Leaf curling", "Stunted growth", "Blighted foliage"],
        organicCure: "Baking Soda Solution - Mix baking soda with water and spray to raise pH and prevent mildew."
    },
    {
        name: "Downy Mildew",
        symptoms: ["Yellowing leaves", "Leaf spots", "Moldy growth", "Blighted foliage"],
        organicCure: "Milk Spray - Dilute milk (1:10) and spray on plants to inhibit mildew growth."
    }
];

function identifyDisease() {
    const selectedSymptoms = Array.from(document.querySelectorAll('.symptom-group input:checked'))
                                   .map(checkbox => checkbox.value);

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    const matchedDiseases = cropDiseases.filter(disease =>
        selectedSymptoms.some(symptom => disease.symptoms.includes(symptom))
    );

    if (matchedDiseases.length > 0) {
        matchedDiseases.forEach(disease => {
            const diseaseDiv = document.createElement('div');
            diseaseDiv.classList.add('disease');
            diseaseDiv.innerHTML = `<h3>${disease.name}</h3><p><strong>Organic Cure:</strong> ${disease.organicCure}</p>`;
            resultDiv.appendChild(diseaseDiv);
        });
    } else {
        resultDiv.innerHTML = "<p>No matching diseases found for the selected symptoms.</p>";
    }

    // Clear checkboxes after submission
    document.querySelectorAll('.symptom-group input[type="checkbox"]').forEach(checkbox => checkbox.checked = false);
}