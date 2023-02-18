<template>
  <section class = "section-four">
    <div class = "container">
      <div class = "blogs">
        <div class = "blog-wrapper-lg">
          <!-- single blog post -->
          <div class = "blog">
            <img src = "@/assets/images/blog1.jpg">
            <div class = "blog-content">
              <span class = "badge">Photography</span>
              <span class = "misc-info">
                                    Published: 1 Week Ago | 25 Comments
                                </span>
              <h3 class = "blog-title">
                Best Photography Tips For Beginners
              </h3>
              <p class = "blog-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, eligendi!
              </p>
              <a href = "#" class = "btn">Read More</a>
            </div>
          </div>
          <!-- end of single post -->

          <!-- single blog post -->
          <div class = "blog">
            <img src = "@/assets/images/blog2.jpg">
            <div class = "blog-content">
              <span class = "badge">Photography</span>
              <span class = "misc-info">
                                    Published: 1 Week Ago | 25 Comments
                                </span>
              <h3 class = "blog-title">
                Best Photography Tips For Beginners
              </h3>
              <p class = "blog-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, eligendi!
              </p>
              <a href = "#" class = "btn">Read More</a>
            </div>
          </div>
          <!-- end of single post -->
        </div>

        <div class = "blog-wrapper-sm">
          <!-- single blog post -->
          <div class = "blog">
            <img src = "@/assets/images/blog3.jpg">
            <div class = "blog-content">
              <span class = "badge">Photography</span>
              <span class = "misc-info">
                                    Published: 1 Week Ago | 25 Comments
                                </span>
              <h3 class = "blog-title">
                Best Photography Tips For Beginners
              </h3>
              <p class = "blog-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, eligendi!
              </p>
              <a href = "#" class = "btn">Read More</a>
            </div>
          </div>
          <!-- end of single post -->

          <!-- single blog post -->
          <div class = "blog">
            <img src = "@/assets/images/blog4.jpg">
            <div class = "blog-content">
              <span class = "badge">Photography</span>
              <span class = "misc-info">
                                    Published: 1 Week Ago | 25 Comments
                                </span>
              <h3 class = "blog-title">
                Best Photography Tips For Beginners
              </h3>
              <p class = "blog-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, eligendi!
              </p>
              <a href = "#" class = "btn">Read More</a>
            </div>
          </div>
          <!-- end of single post -->

          <!-- single blog post -->
          <div class = "blog">
            <img src = "@/assets/images/blog5.jpg">
            <div class = "blog-content">
              <span class = "badge">Photography</span>
              <span class = "misc-info">
                                    Published: 1 Week Ago | 25 Comments
                                </span>
              <h3 class = "blog-title">
                Best Photography Tips For Beginners
              </h3>
              <p class = "blog-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, eligendi!
              </p>
              <a href = "#" class = "btn">Read More</a>
            </div>
          </div>
          <!-- end of single post -->

          <!-- single blog post -->
          <div class = "blog">
            <img src = "@/assets/images/blog6.jpg">
            <div class = "blog-content">
              <span class = "badge">Photography</span>
              <span class = "misc-info">
                                    Published: 1 Week Ago | 25 Comments
                                </span>
              <h3 class = "blog-title">
                Best Photography Tips For Beginners
              </h3>
              <p class = "blog-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, eligendi!
              </p>
              <a href = "#" class = "btn">Read More</a>
            </div>
          </div>
          <!-- end of single post -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BlogPage",
  data() {
    return {
      title: 'Blog'
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'Blog page',
          name: 'Blog page',
          content: 'My blog',
        }
      ]
    }
  }
};
</script>
