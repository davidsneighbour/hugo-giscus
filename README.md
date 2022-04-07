<!--- CARD BEGIN --->

![DNB-Hugo/HEAD](.github/github-card-dark.png#gh-dark-mode-only)
![DNB-Hugo/HEAD](.github/github-card-light.png#gh-light-mode-only)

<!--- CARD END --->

# DNB GoHugo Component / Giscus

This is a Hugo theme component to add the Giscus comment system to static websites.

[Giscus](https://giscus.app/) is a comments system powered by GitHub Discussions.

**Note:** Giscus is still under active development. GitHub is also still actively developing Discussions and its API. Thus, some features of giscus may break or change over time. We will keep an eye out for any updates and implement them here in time.

<!--- THINGSTOKNOW BEGIN --->

## Some things you need to know

These are notes about conventions in this README.md. You might want to make yourself acquainted with them if this is your first visit.

<details>

<summary>:heavy_exclamation_mark: A note about proper configuration formatting. Click to expand!</summary>

The following documentation will refer to all configuration parameters in TOML format and with the assumption of a configuration file for your project at `/config.toml`. There are various formats of configurations (TOML/YAML/JSON) and multiple locations your configuration can reside (config file or config directory). Note that in the case of a config directory the section headers of all samples need to have the respective section title removed. So `[params.dnb.something]` will become `[dnb.something]` if the configuration is done in the file `/config/$CONFIGNAME/params.toml`.

</details>
<!--- THINGSTOKNOW END --->

<!--- INSTALLUPDATE BEGIN --->

## Installing

First enable modules in your own repository if you did not already have done so:

```bash
hugo mod init github.com/username/reponame
```

Then add this module to your required modules in `config.toml`.

```toml
[module]

[[module.imports]]
path = "github.com/davidsneighbour/hugo-giscus"
disable = false
ignoreConfig = false
ignoreImports = false

```

The next time you run `hugo` it will download the latest version of the module.

## Updating

```bash
# update this module
hugo mod get -u github.com/davidsneighbour/hugo-giscus
# update to a specific version
hugo mod get -u github.com/davidsneighbour/hugo-giscus@v1.0.0
# update all modules recursively over the whole project
hugo mod get -u ./...
```
<!--- INSTALLUPDATE END --->

## Configuration

The module accepts configuration via params section in your configuration file.

```toml
[dnb.giscus]
src = "https://giscus.app/client.js"
dataRepo = "username/reponame"
dataRepoId = "ABCDEFGHIJKLMNOPQSTUVXYZABCDEFGH"
dataCategory = "Comments"
dataCategoryId = "ABCDEFGHIJKLMNOPQRST"
dataMapping = "specific"
dataLoading = "lazy"
dataReactionsEnabled = "1"
dataEmitMetadata = "0"
dataInputPosition = "top"  # top, bottom
dataTheme = "dark"
dataLang = "en"
```

The data-parameter correspond with the parameters of Giscus. The four parameters `dataRepo`, `dataRepoId`, `dataCategory`, and `dataCategoryId` are required. All other parameters are optional and have default values as shown in the sample above.

You can find the proper values for your setup by filling out the form on the [Giscus configuration page](https://giscus.app/configuration).

The default `dataMapping` is set to specific and will use the title of the post as term.

### Advanced setup

With a little bit of more work you can set Giscus up to allow only connections from specific sources and define the comment order.

This can be done with this module's configuration and future updates to these features will be integrated. Or you create the giscus.json in your static directory manually and keep it up to date. The instructions are [here](https://github.com/giscus/giscus/blob/main/ADVANCED-USAGE.md#giscusjson).

To configure the module to create the giscus.json add the custom output format `GISCUS` to your home section:

```toml
[outputs]   
home = ["HTML", "GISCUS"]
```

Be careful to not override the existing home output formats.

Once added you will find a `giscus.json` in your website root.

**Comment sort order:**

Available options are `oldest` (sorting from oldest to newest comment) and `newest` (sorting newest to oldest).

```toml

[dnb.giscus.extended]
defaultCommentOrder = "oldest" 
```

**Origin setup:**

```toml
[dnb.giscus.extended]
origins = ["https://yourdomainname.ext", "http://localhost:1313"]
originsRegex = ["http://localhost:(1313|8080)"]
```

Add your origins to the params configuration. Leave the options out to not add them to your `giscus.json`.

<!--- COMPONENTS BEGIN --->

## Other [GoHugo](https://gohugo.io/) components by [@dnb-org](https://github.com/dnb-org/)

<!-- prettier-ignore -->
| Component | Description |
| :--- | :--- |
| [dnb-hugo-auditor](https://github.com/davidsneighbour/hugo-auditor) | |
| [dnb-hugo-debug](https://github.com/davidsneighbour/hugo-debug) :mage_man: | Debug EVERYTHING in GoHugo. |
| [dnb-hugo-errors](https://github.com/davidsneighbour/hugo-errors) | A Hugo module that adds more versatile error pages to a site. |
| [dnb-hugo-feeds](https://github.com/davidsneighbour/hugo-feeds) | Implements various configurable feed formats. |
| [dnb-hugo-functions](https://github.com/davidsneighbour/hugo-functions) | A Hugo theme component with helper functions for other projects. |
| [dnb-hugo-giscus](https://github.com/davidsneighbour/hugo-giscus) | The Giscus comment system layout for GoHugo. |
| [dnb-hugo-head](https://github.com/davidsneighbour/hugo-head) | A GoHugo theme component that solves the old question of "What tags belong into the `<head>` tag of my website?" |
| [dnb-hugo-hooks](https://github.com/davidsneighbour/hugo-hooks) | Hooks for GoHugo layouts. An easy way for theme developers to let users add to their themes.  |
| [dnb-hugo-humans](https://github.com/davidsneighbour/hugo-humans) | Your site is made by humans. Humans.txt is naming them. |
| [dnb-hugo-icons](https://github.com/davidsneighbour/hugo-icons) | Icons for your Hugo website. |
| [dnb-hugo-internals](https://github.com/davidsneighbour/hugo-internals) | Better internal templates for GoHugo |
| [dnb-hugo-netlification](https://github.com/davidsneighbour/hugo-netlification) | a collection of tools that optimize your site on Netlify |
| [dnb-hugo-opensearch](https://github.com/davidsneighbour/hugo-opensearch) | configuration for Open Search |
| [dnb-hugo-pictures](https://github.com/davidsneighbour/hugo-pictures) | |
| [dnb-hugo-pwa](https://github.com/davidsneighbour/hugo-pwa) | Automatically turns your site into a PWA |
| [dnb-hugo-renderhooks](https://github.com/davidsneighbour/hugo-renderhooks) | render hooks for Markdown markup |
| [dnb-hugo-robots](https://github.com/davidsneighbour/hugo-robots) | Add a customizable robots.txt to your website. |
| [dnb-hugo-schema](https://github.com/davidsneighbour/hugo-schema) | |
| [dnb-hugo-search-algolia](https://github.com/davidsneighbour/hugo-search-algolia) | |
| [dnb-hugo-security](https://github.com/davidsneighbour/hugo-security) | Add a security.txt to your site with information about your preferred procedures to notify the developer team about security issues. |
| [dnb-hugo-sitemap](https://github.com/davidsneighbour/hugo-sitemap) | |
| [dnb-hugo-social](https://github.com/davidsneighbour/hugo-social) | |
| [dnb-hugo-workflows](https://github.com/davidsneighbour/hugo-workflows) | A collection of Github Actions/Workflows to optimise your work with GoHugo. |
| [dnb-hugo-youtube](https://github.com/davidsneighbour/hugo-youtube) | A shortcode and partial for lite and speedy youtube embeds. |

<!--lint disable no-missing-blank-lines -->
<!--- COMPONENTS END --->
