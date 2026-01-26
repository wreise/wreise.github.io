<script>
    let { title, children } = $props();
    let visible = $state(false);

    function toggle() {
        visible = !visible;
    }
</script>

<section>
    <button onclick={toggle}>
        <h1>{title}</h1>
    </button>
    {#if visible}
        <div>
            {@render children()}
        </div>
    {/if}
</section>
