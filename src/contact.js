/* CONTACT */

export function renderContactPage() {
  const contactPageElement = document.createElement('div');
  contactPageElement.className = "contact-page-section";
  const contactPageElementInnerHTML =
    `
    <div class = "contact-card">
      <div class = "contact">
        <h1>
        CONTACT/VISIT US AT:
        </h1>
        <p>
        Address: 1234 Bronx. St.
        </p>
        <p>
        Phone Number: (123)-456-7890
        </p>
        <p>
        Owner Names: John and Jane Doe
        </p>
        <p>
        Email: odinshack123@gmail.com
        </p>
      </div>

      <div class = "special-credit">
        <h1>
        SPECIAL CREDIT
        </h1>
        <p>
        Credits to:
        Richard Nguyen, our fantastic web developer!
        (Contact him at his "Git" or whatever its called: <a href="https://github.com/richardnguyen165">https://github.com/richardnguyen165</a>)
        </p>
      </div>
    </div>
    `;
  contactPageElement.innerHTML = contactPageElementInnerHTML;
  return contactPageElement;
}

export default renderContactPage;