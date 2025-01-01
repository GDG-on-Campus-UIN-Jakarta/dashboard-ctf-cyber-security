<script lang="ts" setup>
import VerticalNavSectionTitle from '@/@layouts/components/VerticalNavSectionTitle.vue'
import VerticalNavGroup from '@layouts/components/VerticalNavGroup.vue'
import VerticalNavLink from '@layouts/components/VerticalNavLink.vue'
</script>

<template>
  <VerticalNavLink
    :item="{
      title: 'Dashboard',
      to: '/dashboard',
      icon: 'ri-home-smile-line',
    }"
  />

  <!-- <VerticalNavGroup -->
  <!--   :item="{ -->
  <!--     title: 'Dashboards', -->
  <!--     badgeContent: '5', -->
  <!--     badgeClass: 'bg-error', -->
  <!--     icon: 'ri-home-smile-line', -->
  <!--   }" -->
  <!-- > -->
  <!--   <VerticalNavLink -->
  <!--     :item="{ -->
  <!--       title: 'CRM', -->
  <!--       href: 'https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/demo-1/dashboards/crm', -->
  <!--       target: '_blank', -->
  <!--       badgeContent: 'Pro', -->
  <!--       badgeClass: 'bg-light-primary text-primary', -->
  <!--     }" -->
  <!--   /> -->
  <!-- </VerticalNavGroup> -->
  <!---->

  <VerticalNavLink
    :item="{
      title: 'Users',
      icon: 'ri-group-line',
      to: '/users',
    }"
  />

  <VerticalNavGroup
    :item="{
      title: 'Teams',
      icon: 'ri-team-line',
    }"
  >
    <VerticalNavLink
      :item="{
        title: 'My Teams',
        to: '/under-development',
      }"
    />
    <VerticalNavLink
      :item="{
        title: 'Other Teams',
        to: '/tables',
      }"
    />
  </VerticalNavGroup>

  <VerticalNavGroup
    :item="{
      title: 'Challanges',
      icon: 'ri-trophy-line',
    }"
  >
    <VerticalNavLink
      :item="{
        title: 'All',
        to: '/tables',
      }"
    />
    <VerticalNavLink
      :item="{
        title: 'Submitted',
        to: '/tables',
      }"
    />
    <VerticalNavLink
      :item="{
        title: 'Not Yet Submitted',
        to: '/tables',
      }"
    />
  </VerticalNavGroup>

  <VerticalNavSectionTitle
    :item="{
      heading: 'Settings',
    }"
  />

  <VerticalNavLink
    :item="{
      title: 'Profile',
      icon: 'ri-user-line',
      to: '/tables',
    }"
  />

  <VerticalNavLink
    :item="{
      title: 'Notification',
      icon: 'ri-notification-line',
      to: '/tables',
    }"
  />
</template>
