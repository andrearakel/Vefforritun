const API_URL = 'https://apis.is/company?name=';

/**
 * Leit að fyrirtækjum á Íslandi gegnum apis.is
 */
const program = (() => {
  function init(companies) {
    const form = companies.querySelector('form');
    form.addEventListener('submit', getResults);

  }

  function getResults(e) {
    e.preventDefault();
    const company = e.target.querySelector('input');

    if(company !== '') {
      showResults(company.value);
    } else {
      showMessage('Lén verður að vera strengur')
    }
  }

  function showResults(company) {
    fetch(`${API_URL}${company}`)
      .then((response) => {
        if(response.ok) {
          return response.json();
        }

        throw new Error('Villa kom upp');
      })
      .then((data) => {
        displayCompany(data.results);
      })
      .catch((error) => {
        displayError('Villa við að sækja gögn');
        console.error(error);
      })
  }

  function displayCompany(companyList) {
    if (companyList.length === 0) {
      displayError('Ekkert fyrirtæki fannst fyrir leitarstreng');
      return; 
    }

    const [{name}] = companyList;

    const dl = document.createElement('dl');
    const companyElement = document.createElement('dt');
    const companyValueElement = document.createElement('dd');

    companyElement.appendChild(document.createTextNode('Nafn'));
    dl.appendChild(companyElement);

    
    comanyValueElement.appendChild(document.createTextNode(name));
    dl.appendChild(companyValueElement);

    //vantar að finna út hvernig þetta er með active 1 og active 0


  }

  function displayError(error) {
    const results = company.querySelector('.results');

    while(results.firstChild) {
      results.removeChild(results.firstChild);
    }

    results.appendChild(document.createTextNode(error));

  }

  return {
    init,
  };
})();

document.addEventListener('DOMContentLoaded', () => {
  program.init(companies);
});
