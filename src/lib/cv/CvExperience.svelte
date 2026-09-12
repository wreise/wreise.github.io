<script>
    import { formatLocation, formatRange, spanOf } from './date.js';

    let { organisation, roles = [] } = $props();

    // With a single role there is nothing to group: the role and the
    // organisation share one header line.
    let grouped = $derived(roles.length > 1);
</script>

<div class="cv-organisation">
    {#if grouped}
        <div class="cv-entry-header">
            <div class="cv-entry-main">
                <div class="cv-entry-title">{organisation}</div>
            </div>
            <div class="cv-entry-meta">
                <div class="cv-entry-date">{spanOf(roles)}</div>
            </div>
        </div>
    {/if}
    <div class="cv-roles" class:cv-roles-grouped={grouped}>
        {#each roles as role}
            <div class="cv-role">
                <div class="cv-entry-header">
                    <div class="cv-entry-main">
                        <div class="cv-entry-title">
                            {grouped ? role.title : `${role.title}, ${organisation}`}
                        </div>
                        {#if role.description}
                            <div class="cv-entry-description">{role.description}</div>
                        {/if}
                        {#if role.achievements?.length}
                            <ul class="cv-achievements">
                                {#each role.achievements as achievement}
                                    <li>{achievement}</li>
                                {/each}
                            </ul>
                        {/if}
                    </div>
                    <div class="cv-entry-meta">
                        <div class="cv-entry-date">{formatRange(role.date)}</div>
                        {#if role.location}
                            <div class="cv-entry-location">{formatLocation(role.location)}</div>
                        {/if}
                    </div>
                </div>
            </div>
        {/each}
    </div>
</div>
