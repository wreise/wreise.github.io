<script>
    let { title, date, authors, venue, url } = $props();
</script>

<div class="cv-publication">
    <div class="cv-entry-header">
        <div class="cv-entry-title">
            {#if url}
                <a href={url}>{title}</a>
            {:else}
                {title}
            {/if}
        </div>
        {#if date}
            <div class="cv-entry-date">{date}</div>
        {/if}
    </div>
    {#if authors}
        <div class="cv-publication-authors">with {authors}</div>
    {/if}
    {#if venue}
        <div class="cv-publication-venue">{venue}</div>
    {/if}
</div>
