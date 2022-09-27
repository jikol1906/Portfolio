const form = document.querySelector("#contactform") as HTMLFormElement;
const submitbutton = document.querySelector(
  "#contact button[type='submit']"
) as HTMLInputElement;

form.addEventListener("submit", (e) => {
  addLoadingSpinner();
  e.preventDefault();
  const params = new URLSearchParams(new FormData(form) as any).toString();
    
        fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params,
        })
        .then(() => {
            const docLang = document.documentElement.lang;

            switch (docLang) {
            case "en":
                removeLoadingSpinner("Message Sent!");
                break;
            case "da":
                removeLoadingSpinner("Besked Sendt");
                break;
            case "de":
                removeLoadingSpinner("Nachricht gesendet!");
                break;
            default:
                removeLoadingSpinner("Message Sent!");
            }
        })
        .catch((error) => alert(error));
});

const addLoadingSpinner = () => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML =
    '<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>';
  wrapper.style.position = "absolute";
  wrapper.style.top = "50%";
  wrapper.style.left = "50%";
  wrapper.style.transform = "translate(-50%,-50%)";
  submitbutton.style.color = "transparent";
  submitbutton.style.position = "relative";
  submitbutton.appendChild(wrapper);
};
const removeLoadingSpinner = (newButtonText: string) => {
  submitbutton.removeChild(submitbutton.children[0]);
  submitbutton.style.color = "var(--color-white)";
  submitbutton.textContent = newButtonText;
};
