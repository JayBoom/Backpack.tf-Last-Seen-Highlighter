// ==UserScript==
// @name         Backpack.tf Last Seen Highlighter
// @namespace    https://github.com/JayBoom/Backpack.tf-Last-Seen-Highlighter
// @version      1.1
// @description  Highlight last seen entries in Backpack.tf based on their recency
// @author       JayTuut
// @match        https://backpack.tf/*
// @grant        none

// @homepageURL     https://github.com/JayBoom/Backpack.tf-Last-Seen-Highlighter
// @supportURL      https://github.com/JayBoom/Backpack.tf-Last-Seen-Highlighter/issues
// @downloadURL     https://raw.githubusercontent.com/JayBoom/Backpack.tf-Last-Seen-Highlighter/main/backpacktflastseenhighlighter.js
// ==/UserScript==

(function() {
    'use strict';

    // Get all the result containers
    var results = document.querySelectorAll('.result');

    // Iterate over each result container
    results.forEach(function(result) {
        // Get all the descriptions within this result container
        var descriptions = result.querySelectorAll('.description');

        // Initialize a flag to determine if a recent time period was found
        var isRecent = false;

        // Iterate over each description in this result container
        descriptions.forEach(function(description) {
            // Get the text content of the description
            var descriptionText = description.textContent.toLowerCase();

            // Check if the description contains keywords indicating recency
            if ((descriptionText.includes('days') ||
                 descriptionText.includes('1 month ago') ||
                 descriptionText.includes('2 months ago') ||
                 descriptionText.includes('week'))) {
                // If the description indicates recency, set the flag to true
                isRecent = true;
            } if (descriptionText.includes('4 months ago') ||
                  descriptionText.includes('3 months ago') ||
                  descriptionText.includes('5 months ago') ||
                  descriptionText.includes('6 months ago') ||
                  descriptionText.includes('7 months ago') ||
                  descriptionText.includes('8 months ago') ||
                  descriptionText.includes('9 months ago') ||
                  descriptionText.includes('10 months ago') ||
                  descriptionText.includes('11 months ago') ||
                  descriptionText.includes('year') ||
                  descriptionText.includes('no known previous owner') ||
                  descriptionText.includes('12 months ago')) {
                // If the description contains a keyword indicating a long time period, reset the flag to false
                isRecent = false;
            }
        });

        // If a recent time period was found in any of the descriptions within this result container
        // and no long time period was found, highlight the container
        if (isRecent) {
            result.style.backgroundColor = 'lightgreen';
        }
    });
})();
