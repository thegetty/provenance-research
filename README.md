This is the repository for *Provenance Research for Mediterranean Antiquities*, edited by Judith Barr, Nicole Budrovich, and David Saunders. This digital book was first published Month, DD, YYYY, by the J. Paul Getty Museum. It is available online at https://www.getty.edu/publications/provenance-research/ and may be downloaded there free of charge in multiple formats.

## About the Book

TK

## Using this Repository

This is one in series of multiformat publications using [Quire](http://quire.getty.edu)™, Getty’s multiformat publishing tool. 

We are dedicated to maintaining this publication for years to come at the permanent URL, https://www.getty.edu/publications/provenance-research/, and in its various formats and incarnations. For any updates to the book, we will be following something between an app and traditional book publication model. Updates will only be made in regulated chunks as formal revisions and new editions and will always be thoroughly documented here in the repository, as well as in the revision history included with each of the book’s many formats.

The primary content pieces of the book can be found in the `content` directory. The `main` branch represents the current, published edition at all times, and the `revisions` branch, when present, will show changes currently under consideration. We invite you to submit suggestions or corrections via pull request on the revisions branch, by posting an issue, or by emailing us at [pubsinfo@getty.edu](mailto:pubsinfo@getty.edu).

## Development Notes

This project was last built with the following software versions:

- Node 22.17.1
- Quire CLI 1.0.0-rc.32

### Branches

| branch | about |
| --- | --- |
| `main` | The primary branch |
| `first-pages`, `second-pages`, `final-pages`| Versions of the project at various staages |
| `forthcoming` | A static placeholder page that was displayed at the book’s final URL on getty.edu prior to publication |
| `revisions` | Any revisions currently under consideration but not yet published |

### Figure Images Submodule

Some of figure images for *Provenance Research for Mediterranean Antiquities* are licensed from third parties for use exclusively in this publication. As such, they are kept in a separate, private repository, https://github.com/thegetty/provenance-research-images/, which is linked to this main publication repository as a submodule in `content/_assets/images/figures/`. When cloning this repo for further development, you’ll permissions for the private repository and will need to clone recursively in order to clone both the main repo and the submodule.

```
git clone --recursive https://github.com/thegetty/provenance-research.git
```

### Previewing the Online Edition Locally

1. Install Node.js 22.17.1 and verify with with `node --version`

2. Install the Quire CLI with `npm install -g @thegetty/quire-cli@1.0.0-rc.32`

3. Clone this repository and select the appropriate branch

4. Run `npm install` to install the project dependencies (this just needs to be done once when first cloning the project, or whenever the core template/code files are updated)

5. Change the `url` in `content/_data/publication.yaml` to `http://localhost:8080/`

6. See the preview with `quire preview`

### Creating a PDF Version

1. Temporarily switch `url` in publication.yaml to `url: 'http://localhost:8080'`

2. Run `quire build`

4. With PrinceXML 15.3 installed, run `quire pdf --lib prince`

### Creating an EPUB Version

1. Temporarily switch `url` in publication.yaml to `url: 'http://localhost:8080'`

2. Run `quire build`

3. Use a tool like the ePub Zip-Unzip script to unzip the resulting `epubjs.epub` file.

4. In the resulting `epubjs` unzipped directory, open `epubjs/ops/package.opf` add the following metadata items:

        ```
        <meta property="schema:accessibilitySummary">This publications meets baseline accessibility standards</meta>
        <meta property="schema:accessMode">textual</meta>
        <meta property="schema:accessMode">visual</meta>
        <meta property="schema:accessModeSufficient">textual</meta>
        <meta property="schema:accessModeSufficient">visual</meta>
        <meta property="schema:accessibilityFeature">alternativeText</meta>
        <meta property="schema:accessibilityFeature">structuralNavigation</meta>
        <meta property="schema:accessibilityFeature">tableOfContents</meta>
        <meta property="schema:accessibilityHazard">noFlashingHazard</meta>
        <meta property="schema:accessibilityHazard">noMotionSimulationHazard</meta>
        <meta property="schema:accessibilityHazard">noSoundHazard</meta>
        ```

5. Delete the original EPUB file and use the same tool to repackage the raw files into a new EPUB

6. Run the resulting file through epubcheck-5.3.0 and Ace by DAISY accessibility checker to ensure there aren't any validation or accessibility errors or warnings.

### Customizations

**_plugins/shortcodes/accordion.js**
**.eleventy.js**
Add `-epub-pdf` suffix to section id and turn off `checkDuplicates` in `IdAttributePlugin` to avoid id duplication issues

**_includes/components/copyright/licensing.js**
Updated licensing language

**_includes/components/license-icons.js**
Remove icons from EPUB output to avoid validation issues with SVGs

**_includes/components/menu/item.js**
Add page subtitles to sidebar menu

**_includes/components/navigation.js**
Fix label appearance in navbar

**_includes/components/table-of-contents/item/list.js**
Wrapped label in span for styling, and removed arrow graphic

**_layouts/base.11ty.js**
Added class to `<body>` element for styling the cover page

**_layouts/cover.liquid**
Changed contributor list from 'string' to 'name', removed hard-coded italics 

**_plugins/markdown/index.js**
Add superscript support; and create better line breaks for URLs, per Chicago Manual of Style

**_plugins/shortcodes/contributors.js**
Refactor logic to handle oxford commas correctly

**_plugins/shortcodes/figureGroup.js**
Add group label, caption, and credit

**_plugins/transforms/outputs/pdf/transform.js**
Fix relative links transform (ported from code core Quire)
