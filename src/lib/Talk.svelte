<script>
    let { title, date, location, description, slidesUrl, abstract } = $props();
    let showAbstract = $state(false);

    function toggleAbstract() {
        showAbstract = !showAbstract;
    }
</script>

<li>
    <strong>{title}</strong><br>
    {date}, {location}<br>
    <em>{description}</em>
    {#if slidesUrl}
        (<a href={slidesUrl} class="button">Slides</a>)
    {/if}
    <br>
    {#if abstract}
        {#if typeof abstract === 'string' && !abstract.includes('button')}
            <button onclick={toggleAbstract}>
                Abstract
            </button>
            <div class="abstract" class:overflow={!showAbstract}>
                {@html abstract}
            </div>
        {:else}
             <div class="abstract">
                {@html abstract}
            </div>
        {/if}
    {/if}
</li>
