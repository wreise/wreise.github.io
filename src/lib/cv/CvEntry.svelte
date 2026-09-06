<script>
    let { title, date, subtitle, description, children } = $props();
</script>

<div class="cv-entry">
    <div class="cv-entry-header">
        <div class="cv-entry-title">{title}</div>
        {#if date}
            <div class="cv-entry-date">{date}</div>
        {/if}
    </div>
    {#if subtitle}
        <div class="cv-entry-subtitle">{subtitle}</div>
    {/if}
    {#if description}
        <div class="cv-entry-description">{description}</div>
    {/if}
    {#if children}
        {@render children()}
    {/if}
</div>
