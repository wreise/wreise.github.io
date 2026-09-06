<script>
    let { title, children } = $props();
</script>

<section class="cv-section">
    <h2>{title}</h2>
    {@render children()}
</section>
