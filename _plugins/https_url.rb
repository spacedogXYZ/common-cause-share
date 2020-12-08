module Jekyll
  class HttpsURL < Liquid::Tag

    def initialize(tag_name, text, tokens)
      super
      @text = text
    end

    def render(context)
      # pull variable value from context
      begin
        url_text = context[@markup.strip]
        uri = URI.parse(url_text)
        uri.scheme = "https"
        uri.to_s
      rescue URI::InvalidURIError
        @markup
      end
    end
  end
end

Liquid::Template.register_tag('https_url', Jekyll::HttpsURL)