function getElementWidth(content, padding, border) {
    const contentWidth = parseFloat(content);
    const paddingWidth = parseFloat(padding);
    const borderwidth = parseFloat(border);

    // Розрахунок загальної ширини елемента для box-sizing: border-box
    const totalWidth = contentWidth + 2 * paddingWidth + 2 * borderwidth;
    
    return Math.round(totalWidth); // Повернути округлене значення загальної ширини
}

// Перевірка роботи функції
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
