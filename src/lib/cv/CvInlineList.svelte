<script>
    let { items = [] } = $props();
</script>

<div class="cv-inline-list">
    {#each items as { label, value }}
        <div><strong>{label}:</strong> {value}</div>
    {/each}
</div>
