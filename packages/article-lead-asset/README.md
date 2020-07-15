# Article Lead Asset

An article lead asset is an unstyled image or video (asset) with an inline
caption. The caption is rendered using the renderProps React convention. On
native platforms, assets are opened in modals on tap, and a consumer can choose
to provide different renderProps for inline/modal captions. Consumers are
responsible for styling the lead asset by placing it inside of a container
and/or by styling the component returned by the caption renderProp. On native
platforms, consumers must also provide a `getImageCrop` prop that will determine
which crop to use for the lead asset based on the available crops.

## Usage

```js
// Image
<ArticleLeadAsset
    // Only used on web
    aspectRatio="16:9"

    // Only used on web
    displayImage={{
      ratio: "16:9"
      url: "http://crop169.io"
    }}

    leadAsset={{
      caption: "Caption text"
      credits: "Credits text"
      crop169: {
        ratio: "16:9"
        url: "http://crop169.io"
      }
    }}

    // Only used on native, used to specify fallback crops
    getImageCrop={leadAsset => leadAsset.crop169 || leadAsset.crop32}

    // Used to render inline caption on both web and native
    renderCaption={({ caption }) => <Caption {...caption } />}

    // Specify the width to render the asset at.
    // Rendered at this size on native platforms, and used for lazy loading
    // on web
    width={600}
/>
```

