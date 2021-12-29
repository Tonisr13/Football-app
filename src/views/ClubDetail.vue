<template>
    <div v-if="clubDetail">
        <!-- Club Info -->
        <div class="club-detail">
            <div class="club-logo">
                <img :src="clubDetail.crestUrl" :alt="clubDetail.name">
            </div>

            <div class="club-detail-info">
                <h1 class="club-name">{{ clubDetail.name }}</h1>

                <div class="table-detail">
                    <div class="list">
                        <div class="list-title">Venue</div>
                        <div class="list-desc">{{ clubDetail.venue }}</div>
                    </div>
                    <div class="list">
                        <div class="list-title">Address</div>
                        <div class="list-desc">{{ clubDetail.address }}</div>
                    </div>
                    <div class="list">
                        <div class="list-title">Country</div>
                        <div class="list-desc">{{ clubDetail.area.name }}</div>
                    </div>
                    <div class="list">
                        <div class="list-title">Founded</div>
                        <div class="list-desc">{{ clubDetail.founded }}</div>
                    </div>
                    <div class="list">
                        <div class="list-title">Phone</div>
                        <div class="list-desc">{{ clubDetail.phone || '-' }}</div>
                    </div>
                    <div class="list">
                        <div class="list-title">Email</div>
                        <div class="list-desc">{{ clubDetail.email }}</div>
                    </div>
                    <div class="list">
                        <div class="list-title">Website</div>
                        <div class="list-desc"><a :href="clubDetail.website">{{ clubDetail.website }}</a></div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Competition -->
        <div class="card">
            <div class="card-title">
                <p>Competitions</p>
                <span>List of current competition</span>
            </div>

            <div class="overflow-auto">
                <table class="table-default">
                    <thead>
                        <tr>
                            <th>Competition Name</th>
                            <th>Code</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="competition in clubDetail.activeCompetitions" :key="competition.name">
                            <td>{{ competition.name }}</td>
                            <td>{{ competition.code }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- Squads -->
        <div class="card">
            <div class="card-title">
                <p>Squads</p>
                <span>List of active squad</span>
            </div>

            <div class="overflow-auto">
                <table class="table-default">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Nationality</th>
                            <th>Position</th>
                            <th>Place & Date Of Birth</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="squad in clubDetail.squad" :key="squad.name">
                            <td>{{ squad.name }}</td>
                            <td>{{ squad.nationality }}</td>
                            <td>{{ squad.position }}</td>
                            <td>
                                {{ squad.countryOfBirth + ', ' + reformatDate(squad.dateOfBirth) }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, onMounted } from 'vue'
    import { IClub } from '@/config/interfaces/ClubInterface'
    import { getClubProfile } from '@/config/services/FootbalServices'
    import { reformatDate } from '@/config/helpers/helpers'
    import Router from '@/config/composables/Router'

    // Import router
    const { route } = Router()

    // Variable declaration
    const teamID = ref<any>(route.query.team)
    const clubDetail = ref<IClub>()
    const isLoading = ref<boolean>(true)

    // Function get fotball club detail
    const getClubDetail = async () => {
        isLoading.value = true

        await getClubProfile(teamID.value).then(response => {
            clubDetail.value = response
            isLoading.value = false
        })
    }

    onMounted(() => {
        getClubDetail()
    })
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/partials/variable';

    .club-detail {
        display: flex;
        align-items: center;
        margin-bottom: 80px;

        .club-logo {
            width: 220px;
            height: 220px;
            border-radius: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: $color-white;
            box-shadow: $card-shadow;
            margin-right: 60px;

            img {
                width: 120px;
                height: auto;
            }
        }
        &-info {
            flex: 1;

            .club-name {
                color: $color-black;
                font-size: 32px;
                line-height: 40px;
                letter-spacing: 0.025em;
                font-weight: 700;
                margin-bottom: 20px;
            }
        }
    }

    .card {
        margin-bottom: 60px;

        &:last-child {
            margin-bottom: 0;
        }
    }

    @media screen and (max-width: 750px) {
        .club-detail {
            flex-direction: column;
            align-items: flex-start;

            .club-logo {
                width: 180px;
                height: 180px;
                margin-left: auto;
                margin-right: auto;
                margin-bottom: 40px;

                img {
                    width: 80px;
                }
            }
            &-info {
                flex: none;
                width: 100%;

                .club-name {
                    font-size: 28px;
                    line-height: 36px;
                }
            }
        }
    }
</style>