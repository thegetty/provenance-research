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

TK

### Creating an EPUB Version

TK

### Customizations

**_plugins/shortcodes/accordion.js**
**.eleventy.js**
Add `-epub-pdf` suffix to section id and turn off `checkDuplicates` in `IdAttributePlugin` to avoid id duplication issues

**_includes/components/copyright/licensing.js**
Updated licensing language

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
