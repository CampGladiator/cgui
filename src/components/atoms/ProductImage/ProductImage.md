Product Images are used primarily to serve the image shown at checkout for a specific product or service. This can show one of our default images (bold, single camp, one week free) or can show a custom image provided via the `src` prop.

To use a default image, use the `type` prop by passing it a string of one of the following options:

- `bold`: BOLD membership product
- `single`: single camp membership product
- `owf`: One week free product

If no image is selected via the type or src props, the default "No image available" image will be used.

Additionally, you can define the size of the image using the `size` prop. Default size is set to 80px X 80px.

Product images should always have a 1:1 ratio and should ideally be served via our CDN rather than directly from the application source code/server.
