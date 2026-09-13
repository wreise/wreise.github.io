<script>
    let { name, subtitle, photo, profile, contact = [] } = $props();
</script>

<header class="cv-header">
    <div class="cv-header-row">
        {#if photo}
            <img class="cv-photo" src={photo} alt={name} />
        {/if}
        <div class="cv-identity">
            <h1>{name}</h1>
            {#if subtitle}
                <div class="cv-subtitle">{subtitle}</div>
            {/if}
        </div>
        {#if contact.length}
            <address class="cv-contact">
                {#each contact as { href, label }}
                    <div class="cv-contact-line">
                        {#if href}<a {href}>{label}</a>{:else}{label}{/if}
                    </div>
                {/each}
            </address>
        {/if}
    </div>
    {#if profile}
        <p class="cv-profile">{profile}</p>
    {/if}
</header>
