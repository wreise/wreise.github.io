<script>
    import { formatRange } from './date.js';

    // `date` is the `{ start, end }` structure shared with the experience
    // entries; a plain string (a publication year, say) is shown as given.
    let { title, date, subtitle, description, children } = $props();

    let dateLabel = $derived(typeof date === 'object' ? formatRange(date) : date);
</script>

<div class="cv-entry">
    <div class="cv-entry-header">
        <div class="cv-entry-title">{title}</div>
        {#if date}
            <div class="cv-entry-date">{dateLabel}</div>
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
