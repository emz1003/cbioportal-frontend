<<<<<<< HEAD
import { Mutation } from "shared/api/generated/CBioPortalAPI";
=======
import * as _ from 'lodash';
import {Mutation} from "shared/api/generated/CBioPortalAPI";
import {VariantAnnotation} from "shared/api/generated/GenomeNexusAPI";
import {MutationAssessor, MyVariantInfo} from 'shared/api/generated/GenomeNexusAPIInternal';
>>>>>>> new dbsnp rsid column

export function generateGenomeNexusQuery(data:Mutation)
{
    let hgvs:string = "";
<<<<<<< HEAD

    if (data.mutationType === "Missense_Mutation" &&
        data.variantAllele &&
        data.variantAllele.length === 1)
=======
    if (data.mutationType === "Missense_Mutation" 
            && data.variantAllele.length === 1)
>>>>>>> new dbsnp rsid column
    {
        hgvs += data.gene.chromosome + ":g." + data.startPosition;
        hgvs += data.referenceAllele + ">" + data.variantAllele;
    }
<<<<<<< HEAD

=======
>>>>>>> new dbsnp rsid column
    return hgvs;
}
