import PDFDocument from 'pdfkit';
import fs from 'fs';

const data = [
    {
        "ResidueName": "madeira",
        "ResidueDescription": "palets, ripas, serragem e afins",
        "AnounceUnit": "kg",
        "TotalSum": "2200",
        "QuantitySum": "2166"
    },
    // ... outros objetos de dados
];

// Criar um novo documento PDF
const doc = new PDFDocument();
const pdfStream = fs.createWriteStream('output.pdf'); // Arquivo de saída

// Define o stream do PDF para escrita no arquivo de saída
doc.pipe(pdfStream);

// Adiciona conteúdo ao PDF
doc.fontSize(12).text('Relatório de Resíduos', { align: 'center' }).moveDown();

data.forEach((item, index) => {
    doc.text(`Resíduo ${index + 1}: ${item.ResidueName}`);
    doc.text(`Descrição: ${item.ResidueDescription}`);
    doc.text(`Unidade: ${item.AnounceUnit}`);
    doc.text(`Total: ${item.TotalSum}`);
    doc.text(`Quantidade: ${item.QuantitySum}`);
    doc.moveDown();
});

// Finaliza e fecha o documento
doc.end();
