# RapidShare

A Jekyll site with Netlify CMS integrated and using Netlify Identity for
authentication.

Based on [netlify-templates/jekyll-netlify-cms](https://github.com/netlify-templates/jekyll-netlify-cms)

## Local Development

### Requirements
- [ruby](https://www.ruby-lang.org/)
- [ruby gems](https://rubygems.org/)
- bundler `gem install --user-install bundler`

Clone this repository and run:

```bash
bundle install --path vendor/bundle
bundle exec jekyll server --watch --livereload
```

Now navigate to [localhost:4000](http://localhost:4000/) to preview the site, and
[localhost:4000/admin](http://localhost:4000/admin) to log into the admin.

### Make Posts

To load content from a CSV, the `make-posts.py` file is provided as a helper.
- python make-posts.py FILENAME.csv
