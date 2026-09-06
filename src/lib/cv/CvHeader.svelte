<script>
    let { name, subtitle, contact = [] } = $props();
</script>

<header class="cv-header">
    <h1>{name}</h1>
    {#if subtitle}
        <div class="cv-subtitle">{subtitle}</div>
    {/if}
    {#if contact.length}
        <div class="cv-contact">
            {#each contact as { href, label }}
                <a {href}>{label}</a>
            {/each}
        </div>
    {/if}
</header>
