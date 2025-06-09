//Luís Macedo | 3220554 | Portfolio | 3º 2024/2025 | 2º semestre | Laboratório de Projeto II | Design Gráfico e Multimédia | ESAD.CR | Professor Marco Heleno | 09-06-2025
//Função para copiar o email para a área de transferência (p5.js)

let email_container_element, email_a_element, email_button_element;
let temp_input;


function setup() 
{
  noCanvas();
  
  email_container_element = select ("#email_container");
  
  email_a_element = select ("#email");
  
  email_button_element = createButton ("COPY EMAIL");
  email_button_element.parent (email_container_element);
  email_button_element.hide();
  email_button_element.mousePressed (copyEmail);
}


function copyEmail() 
{
  temp_input = createInput();
  temp_input.parent (email_container_element);
  temp_input.value (email_a_element.html());
  
  try {
    navigator.clipboard.writeText (temp_input.elt.select())
      .then(() => {
          temp_input.remove();
          email_button_element.hide();
          console.log ("Email copied to clipboard (Clipboard API)");
      })
      .catch(err => {
          console.error ("Clipboard API failed: ", err);
          copyEmailFallback();
      });
  } 
  catch (err) {
    console.error ("Clipboard API failed: ", err);
    copyEmailFallback();
  }
}


function copyEmailFallback() 
{
  temp_input.elt.select();
  document.execCommand ('copy');
  
  temp_input.remove();
  email_button_element.hide();
  
  console.log ("Email copied to clipboard");
}


function showEmailButton() 
{
  email_button_element.show();
}


function hideEmailButton() 
{
  email_button_element.hide();
}

