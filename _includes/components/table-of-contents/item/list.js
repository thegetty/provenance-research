//
// CUSTOMIZED FILE 
// Wrapped label in span for styling, and removed arrow graphic
//
/* eslint-disable camelcase */

import { html, oneLine } from '#lib/common-tags/index.js'

/**
 * Renders a TOC list item
 *
 * @param     {Object} context
 * @param     {String} params
 * @property  {Array} children - The TOC page item's child pages
 * @property  {String} page - The TOC item's page data
 * @property  {String} presentation How the TOC should display. Possible values: ['abstract', 'brief']
 *
 * @return {String} TOC list item markup
 */
export default function (eleventyConfig) {
  const contributors = eleventyConfig.getFilter('contributors')
  const markdownify = eleventyConfig.getFilter('markdownify')
  const pageTitle = eleventyConfig.getFilter('pageTitle')
  const removeHTML = eleventyConfig.getFilter('removeHTML')

  return function (params) {
    const {
      children = '',
      classes = [],
      page,
      presentation
    } = params

    const {
      abstract,
      contributor: pageContributors,
      label,
      layout,
      short_title,
      subtitle,
      summary,
      title
    } = page.data

    /**
     * Check if item is a reference to a built page or just a heading
     * @type {Boolean}
     */
    const isPage = !!layout

    const pageContributorsElement = pageContributors
      ? `<span class="contributor">${contributors({ context: pageContributors, format: 'string' })}</span>`
      : ''

    let pageTitleElement
    if (presentation === 'brief') {
      pageTitleElement = short_title || title
    } else {
      pageTitleElement = oneLine`${pageTitle({ subtitle, title })}${pageContributorsElement}`
    }

    const pageLabelElement = label ? `<span class="page-label">${label}</span> ` : ''
    
    // Returns abstract with any links stripped out
    const abstractText =
      presentation === 'abstract' && (abstract || summary)
        ? `<div class="abstract-text">${removeHTML(markdownify(abstract))}</div>`
        : ''

    let mainElement = `${pageLabelElement}${markdownify(pageTitleElement)}`

    if (isPage) {
      mainElement = `<a href="${page.url}">${mainElement}</a>`
    } else {
      classes.push('no-landing')
    }

    return html`
      <li class="${classes.join(' ')}">
        ${mainElement}
        ${abstractText}
        ${children}
      </li>
    `
  }
}
