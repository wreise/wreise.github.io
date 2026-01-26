<script>
    let { title, authors, journal, journalUrl, pdfUrl, arxivUrl, codeUrl } = $props();
</script>

<li>
    <span class="article">
        <span class="title">{title}</span>,
        {#if authors}
            <span class="authors">with {authors}</span>,
        {/if}
        Published in <em>{@html journal}</em>.
        <br>
        {#if journalUrl}
            <a href={journalUrl}>[journal]</a>,
        {/if}
        {#if pdfUrl}
            <a href={pdfUrl}>[pdf]</a>,
        {/if}
        {#if arxivUrl}
            <a href={arxivUrl}>[arxiv]</a>
        {/if}
        {#if codeUrl}
            , <a href={codeUrl}>[code]</a>
        {/if}
    </span>
</li>
