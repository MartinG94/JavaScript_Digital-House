const fs = require('fs');

const gestorFaqs = {
    rutaArchivo: './data/faqs.json',
    leerJSON: function(){
        let faqsJSON = fs.readFileSync(this.rutaArchivo, 'utf-8');
        let faqsARRAY = JSON.parse(faqsJSON);
        return faqsARRAY;
    },
    
};

module.exports = gestorFaqs;