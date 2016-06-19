import { AdminComponent }     from './admin.component';
import { TeamsComponent }     from './teams/teams.component';
import { GroupsComponent }    from './groups/groups.component';
import { PoolsComponent }     from './pools/pools.component';

export const AdminRoutes = [
  { 
    path: '/admin',
    component: AdminComponent,
    children: [
      { path: '/teams',  component: TeamsComponent },
      { path: '/groups', component: GroupsComponent },
      { path: '/pools',  component: PoolsComponent }
    ]
  }
];