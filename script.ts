(() => {
    // Select necessary HTML elements
    const form = document.getElementById('form') as HTMLFormElement;
    const educationButton = document.getElementById('edubutton') as HTMLButtonElement;
    const skillsButton = document.getElementById('skillsbutton') as HTMLButtonElement;
    const experiencebutton = document.getElementById('experiencebutton') as HTMLButtonElement;
    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;
    const profilePreview = document.getElementById('profilePreview') as HTMLImageElement;
    const generatedResume = document.getElementById('generated-resume') as HTMLDivElement;
    const downloadPdfButton = document.getElementById('download-pdf') as HTMLButtonElement;

    // Create containers to hold dynamic education and skills ,experience fields
    const educationContainer = document.createElement('div');
    const skillsContainer = document.createElement('div');
    const experienceContainer = document.createElement('div');

    // Append these containers before the "Add More Degrees" and "Add More Skills" buttons and more experience buttons
    educationButton.before(educationContainer);
    skillsButton.before(skillsContainer);
    experiencebutton.before(experienceContainer);

    // Variable to store the image data URL
    let profilePictureDataUrl: string | null = null;

    // Function to handle profile picture preview and store the base64 data URL
    profilePictureInput.addEventListener('change', (event: Event) => {
        const file = (event.target as HTMLInputElement).files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                profilePictureDataUrl = reader.result as string;
                profilePreview.src = profilePictureDataUrl; // Show the preview of the image
            };
            reader.readAsDataURL(file);
        }
    });

    // Function to add more education fields
    educationButton.addEventListener('click', () => {
        const newEducationField = document.createElement('input');
        newEducationField.type = 'text';
        newEducationField.placeholder = 'write your education';
        newEducationField.style.marginTop = '10px';
        educationContainer.appendChild(newEducationField);
    });

    // Function to add more skills fields
    skillsButton.addEventListener('click', () => {
        const newSkillField = document.createElement('input');
        newSkillField.type = 'text';
        newSkillField.placeholder = 'write your skills';
        newSkillField.style.marginTop = '10px';
        skillsContainer.appendChild(newSkillField);
    });
    // Function to add more experience fields
    experiencebutton.addEventListener('click', () => {
        const newExperienceField = document.createElement('input');
        newExperienceField.type = 'text';
        newExperienceField.placeholder = 'write your experience';
        newExperienceField.style.marginTop = '10px';
        experienceContainer.appendChild(newExperienceField);
    });

    // Function to handle form submission and generate the resume
    form.addEventListener('submit', (event: Event) => {
        event.preventDefault(); // Prevent form from refreshing the page

        // Get form values
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('E-mial') as HTMLInputElement).value;
        const phone = (document.getElementById('phone') as HTMLInputElement).value;
        const objective = (document.getElementById('obective') as HTMLTextAreaElement).value;
        //const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;

        // Collect values from dynamically added education and skills fields
        const educationFields = educationContainer.querySelectorAll('input');
        const skillsFields = skillsContainer.querySelectorAll('input');
        const experienceFields = experienceContainer.querySelectorAll('input');

        let educationList = '';
        educationFields.forEach((input) => {
            if (input.value) {
                educationList += `<li>${input.value}</li>`;
            }
        });

        let skillsList = '';
        skillsFields.forEach((input) => {
            if (input.value) {
                skillsList += `<li>${input.value}</li>`;
            }
        });
        let experienceList = '';
        experienceFields.forEach((input) => {
            if (input.value) {
                experienceList += `<li>${input.value}</li>`;
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










        const resumeContent = `
        <div style="background: linear-gradient(to bottom, #e1f5fe, #b3e5fc, #81d4fa, #4fc3f7);
,font-family: Arial, sans-serif; color: #333; max-width: 800px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; background-color: #f9f9f9;">
            <h2 contenteditable="true" style="text-align: center; color: #00008B; font-size: 24px text-decoration:underline ">${name}'s Resume</h2>
            ${profilePictureDataUrl ? `<div style="text-align: center;border:solid,box-shadow: 0px 8px 12px rgba(173, 216, 230, 0.5);
 margin-bottom: 20px;"><img src="${profilePictureDataUrl}" alt="Profile Picture" style="max-width: 150px; border-radius: 30%;" /></div>` : ''}
            
            <div style="line-height: 1.6;">
                <p  contenteditable="true" ,style="font-size: 18px box-shadow: 0px 8px 12px rgba(173, 216, 230, 0.5); color: #00008B;"><strong>Email:</strong> ${email}</p>
                <p contenteditable="true"; style="font-size: 18px box-shadow: 0px 8px 12px rgba(173, 216, 230, 0.5); color: #00008B;"><strong>Phone:</strong> ${phone}</p>
                <p  contenteditable="true"; style="font-size: 18px  box-shadow: 0px 8px 12px rgba(173, 216, 230, 0.5);color: #00008B;"><strong>Career Objective:</strong> ${objective}</p>
    
                <hr style="margin: 20px 0; border:2px, border-top: 5px solid #654321;">
    
                <p style="font-size: 18px; color: #444; margin-top: 20px;"><strong>Education:</strong></p>
                <ul contenteditable="true"; style="list-style-type: disc; padding-left: 20px; font-size: 16px; color: #654321;">
                    ${educationList}
                </ul>
                    <hr style="margin: 20px 0;border:2px, border-top: 5px solid #00008B;">
                <p style="font-size: 18px; color: #444; margin-top: 20px;"><strong>Skills:</strong></p>
                <ul contenteditable="true"; style="list-style-type: disc; padding-left: 20px; font-size: 16px; color: #654321;">
                    ${skillsList}
                </ul>
                    <hr style="margin: 20px 0;border:2px, border-top: 5px solid #00008B;">
                <p style="font-size: 18px; color: #444; margin-top: 20p ;"><strong>Experience:</strong></p>
                <ul contenteditable="true"; style="list-style-type: disc; padding-left: 20px; font-size: 16px; color:#654321; ">
                    ${experienceList}
                </ul>
                 <hr style="margin: 20px 0;border:2px border-top: 5px solid #00008B;">
            </div>
        </div>
    `;
    



        // // Display the generated resume
        generatedResume.innerHTML = resumeContent;
    });
     // Function to download the resume as PDF
     downloadPdfButton.addEventListener('click', () => {
        const printWindow = window.open('', '', 'height=600,width=800');
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