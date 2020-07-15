# Article Byline

An article byline is a piece of styled text that consists of an author, or list
of authors, either with, or without author job titles and locations. This data
typically derives from an Abstract Syntax Tree ("AST"), with the resulting
components being passed to article byline as `children`. The consumer of article
byline determines whether the byline should be a link or text, and will import
the appropriate byline component as neccessary.
