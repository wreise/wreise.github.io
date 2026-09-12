<script>
    import {
        cv,
        CvHeader,
        CvSection,
        CvEntry,
        CvExperience,
        CvPublication,
        CvInlineList
    } from '$lib/cv';
    import '$lib/cv/cv.css';
</script>

<svelte:head>
    <title>{cv.name} - CV</title>
</svelte:head>

<div class="cv">
    <CvHeader name={cv.name} subtitle={cv.subtitle} photo={cv.photo} contact={cv.contact} />

    <CvSection title="Profile">
        <p class="cv-profile">{cv.profile}</p>
    </CvSection>

    <CvSection title="Experience">
        {#each cv.experience as group}
            <CvExperience {...group} />
        {/each}
    </CvSection>

    <CvSection title="Education">
        {#each cv.education as entry}
            <CvEntry {...entry} />
        {/each}
    </CvSection>

    <CvSection title="Leadership & Service">
        {#each cv.leadership as group}
            <CvExperience {...group} />
        {/each}
    </CvSection>

    <CvSection title="Publications">
        {#each cv.publications as publication}
            <CvPublication {...publication} />
        {/each}
    </CvSection>

    <CvSection title="Teaching">
        {#each cv.teaching as entry}
            <CvEntry {...entry} />
        {/each}
    </CvSection>

    <CvSection title="Languages">
        <CvInlineList items={cv.languages} />
    </CvSection>
</div>
