(function () {
    // Select necessary HTML elements
    var form = document.getElementById('form');
    var educationButton = document.getElementById('edubutton');
    var skillsButton = document.getElementById('skillsbutton');
    var experiencebutton = document.getElementById('experiencebutton');
    var profilePictureInput = document.getElementById('profilePicture');
    var profilePreview = document.getElementById('profilePreview');
    var generatedResume = document.getElementById('generated-resume');
    var downloadPdfButton = document.getElementById('download-pdf');
    // Create containers to hold dynamic education and skills ,experience fields
    var educationContainer = document.createElement('div');
    var skillsContainer = document.createElement('div');
    var experienceContainer = document.createElement('div');
    // Append these containers before the "Add More Degrees" and "Add More Skills" buttons and more experience buttons
    educationButton.before(educationContainer);
    skillsButton.before(skillsContainer);
    experiencebutton.before(experienceContainer);
    // Variable to store the image data URL
    var profilePictureDataUrl = null;
    // Function to handle profile picture preview and store the base64 data URL
    profilePictureInput.addEventListener('change', function (event) {
        var _a;
        var file = (_a = event.target.files) === null || _a === void 0 ? void 0 : _a[0];
        if (file) {
            var reader_1 = new FileReader();
            reader_1.onload = function () {
                profilePictureDataUrl = reader_1.result;
                profilePreview.src = profilePictureDataUrl; // Show the preview of the image
            };
            reader_1.readAsDataURL(file);
        }
    });
    // Function to add more education fields
    educationButton.addEventListener('click', function () {
        var newEducationField = document.createElement('input');
        newEducationField.type = 'text';
        newEducationField.placeholder = 'write your education';
        newEducationField.style.marginTop = '10px';
        educationContainer.appendChild(newEducationField);
    });
    // Function to add more skills fields
    skillsButton.addEventListener('click', function () {
        var newSkillField = document.createElement('input');
        newSkillField.type = 'text';
        newSkillField.placeholder = 'write your skills';
        newSkillField.style.marginTop = '10px';
        skillsContainer.appendChild(newSkillField);
    });
    // Function to add more experience fields
    experiencebutton.addEventListener('click', function () {
        var newExperienceField = document.createElement('input');
        newExperienceField.type = 'text';
        newExperienceField.placeholder = 'write your experience';
        newExperienceField.style.marginTop = '10px';
        experienceContainer.appendChild(newExperienceField);
    });
    // Function to handle form submission and generate the resume
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form from refreshing the page
        // Get form values
        var name = document.getElementById('name').value;
        var email = document.getElementById('E-mial').value;
        var phone = document.getElementById('phone').value;
        var objective = document.getElementById('obective').value;
        //const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
        // Collect values from dynamically added education and skills fields
        var educationFields = educationContainer.querySelectorAll('input');
        var skillsFields = skillsContainer.querySelectorAll('input');
        var experienceFields = experienceContainer.querySelectorAll('input');
        var educationList = '';
        educationFields.forEach(function (input) {
            if (input.value) {
                educationList += "<li>".concat(input.value, "</li>");
            }
        });
        var skillsList = '';
        skillsFields.forEach(function (input) {
            if (input.value) {
                skillsList += "<li>".concat(input.value, "</li>");
            }
        });
        var experienceList = '';
        experienceFields.forEach(function (input) {
            if (input.value) {
                experienceList += "<li>".concat(input.value, "</li>");
            }
        });
        // Create the resume layout including profile picture
        // const resumeContent = `
        //     <h2>${name}'s Resume</h2>
        //     ${profilePictureDataUrl ? `<img src="${profilePictureDataUrl}" alt="Profile Picture" style="max-width: 150px; border-radius: 50%;" />` : ''}
        //     <p><strong>Email:</strong> ${email}</p>
        //     <p><strong>Phone:</strong> ${phone}</p>
        //     <p><strong>Career Objective:</strong> ${objective}</p>
        //     <p><strong>Education:</strong></p>
        //     <ul>${educationList}</ul>
        //     <p><strong>Skills:</strong></p>
        //     <ul>${skillsList}</ul>
        //      <p><strong>Experience:</strong></p>
        //      <ul>${experienceList}</ul>
        // `;
        var resumeContent = "\n        <div style=\"background: linear-gradient(to bottom, #e1f5fe, #b3e5fc, #81d4fa, #4fc3f7);\n,font-family: Arial, sans-serif; color: #333; max-width: 800px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; background-color: #f9f9f9;\">\n            <h2 contenteditable=\"true\" style=\"text-align: center; color: #00008B; font-size: 24px text-decoration:underline \">".concat(name, "'s Resume</h2>\n            ").concat(profilePictureDataUrl ? "<div style=\"text-align: center;border:solid,box-shadow: 0px 8px 12px rgba(173, 216, 230, 0.5);\n margin-bottom: 20px;\"><img src=\"".concat(profilePictureDataUrl, "\" alt=\"Profile Picture\" style=\"max-width: 150px; border-radius: 30%;\" /></div>") : '', "\n            \n            <div style=\"line-height: 1.6;\">\n                <p  contenteditable=\"true\" ,style=\"font-size: 18px box-shadow: 0px 8px 12px rgba(173, 216, 230, 0.5); color: #00008B;\"><strong>Email:</strong> ").concat(email, "</p>\n                <p contenteditable=\"true\"; style=\"font-size: 18px box-shadow: 0px 8px 12px rgba(173, 216, 230, 0.5); color: #00008B;\"><strong>Phone:</strong> ").concat(phone, "</p>\n                <p  contenteditable=\"true\"; style=\"font-size: 18px  box-shadow: 0px 8px 12px rgba(173, 216, 230, 0.5);color: #00008B;\"><strong>Career Objective:</strong> ").concat(objective, "</p>\n    \n                <hr style=\"margin: 20px 0; border:2px, border-top: 5px solid #654321;\">\n    \n                <p style=\"font-size: 18px; color: #444; margin-top: 20px;\"><strong>Education:</strong></p>\n                <ul contenteditable=\"true\"; style=\"list-style-type: disc; padding-left: 20px; font-size: 16px; color: #654321;\">\n                    ").concat(educationList, "\n                </ul>\n                    <hr style=\"margin: 20px 0;border:2px, border-top: 5px solid #00008B;\">\n                <p style=\"font-size: 18px; color: #444; margin-top: 20px;\"><strong>Skills:</strong></p>\n                <ul contenteditable=\"true\"; style=\"list-style-type: disc; padding-left: 20px; font-size: 16px; color: #654321;\">\n                    ").concat(skillsList, "\n                </ul>\n                    <hr style=\"margin: 20px 0;border:2px, border-top: 5px solid #00008B;\">\n                <p style=\"font-size: 18px; color: #444; margin-top: 20p ;\"><strong>Experience:</strong></p>\n                <ul contenteditable=\"true\"; style=\"list-style-type: disc; padding-left: 20px; font-size: 16px; color:#654321; \">\n                    ").concat(experienceList, "\n                </ul>\n                 <hr style=\"margin: 20px 0;border:2px border-top: 5px solid #00008B;\">\n            </div>\n        </div>\n    ");
        // // Display the generated resume
        generatedResume.innerHTML = resumeContent;
    });
    // Function to download the resume as PDF
    downloadPdfButton.addEventListener('click', function () {
        var printWindow = window.open('', '', 'height=600,width=800');
        if (printWindow) {
            printWindow.document.write('<html><head><title>Resume PDF</title></head><body>');
            printWindow.document.write(generatedResume.innerHTML);
            printWindow.document.write('</body></html>');
            printWindow.document.close();
            printWindow.print();
        }
    });
})();
// <p><strong>Experience:</strong> ${experience}</p>
