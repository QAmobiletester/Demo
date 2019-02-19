const assert = require('assert');

describe('demo test', () => {
    it('demo', () => {
        browser.url('https://www.indeed.com/');
        $('.jobsearch-Footer-promos > p .jobsearch-TextLink-link').click();
        const title = browser.getTitle();
        assert.equal(title, 'Job Search | Indeed');
    });
});