import {AlertTP, Block, Button} from "marionum-ui-kit";
import {AlertIcon, Box, Checkbox, Heading, HStack, Image, Stack, Text, useBoolean} from "@chakra-ui/react";
import LogoEtudiant from '../../../assets/LogoEtudiant.png';

export const ChartePage: React.FC = () => {

    const [areTermsRead, setTermsRead] = useBoolean(false)
    const [areLiabilitiesAccepted, setLiabilitiesAccepted] = useBoolean(false)

    return (
        <>
            <Block paddingY="30px">
                <Image src={LogoEtudiant} alt="MarioNUM"/>
                <Heading as="h2" fontSize="3xl" lineHeight={9} fontWeight="bold" marginTop="24px" marginBottom="8px">
                    Bienvenue sur Marionum !
                </Heading>
                <AlertTP>
                    <HStack paddingY="8px">
                        <AlertIcon/>
                        <div>
                            <Text as="div" fontWeight="bold" color="gray.700">Charte</Text>
                            <Text as="div" color="gray.700">
                                Afin d’accéder à la plate-forme, il est nécessaire de valider la charte ci-dessous :
                            </Text>
                        </div>
                    </HStack>
                </AlertTP>
            </Block>
            <Block backgroundColor="Marionum.100" paddingY="30px" isContent>
                <Box
                    lineHeight={6}>
                    <p>Lorem ipsum dolor sit amet consectetur. Ac commodo at odio convallis integer sit sit arcu. Eget eget ut
                        risus id enim. At tortor leo risus diam lacus facilisi pulvinar sed. Convallis sed ipsum nisl turpis
                        lorem nisl sed est accumsan. Porttitor egestas dolor quam magna. Eget metus quis laoreet feugiat sit.
                        Enim id bibendum amet vitae. Elementum ultricies suspendisse magna aenean a bibendum feugiat quis dolor.
                        Morbi a est turpis dolor. Est ultricies integer lectus fermentum. Varius integer turpis urna est purus.
                        Egestas tincidunt massa felis faucibus interdum accumsan. Turpis viverra sagittis fames pharetra. Dictum
                        libero senectus fermentum nisl aliquam integer sed.</p>
                    <br/>
                    <p>Lorem ipsum dolor sit amet consectetur. Ac commodo at odio convallis integer sit sit arcu. Eget eget
                        ut risus id enim. At tortor leo risus diam lacus facilisi pulvinar sed. Convallis sed ipsum nisl turpis
                        lorem nisl sed est accumsan. Porttitor egestas dolor quam magna. Eget metus quis laoreet feugiat sit. Enim
                        id bibendum amet vitae. Elementum ultricies suspendisse magna aenean a bibendum feugiat quis dolor. Morbi a
                        est turpis dolor. Est ultricies integer lectus fermentum. Varius integer turpis urna est purus. Egestas
                        tincidunt massa felis faucibus interdum accumsan. Turpis viverra sagittis fames pharetra. Dictum libero
                        senectus fermentum nisl aliquam integer sed.</p>
                    <br/>
                    <p>Lorem ipsum dolor sit amet consectetur. Ac commodo at odio convallis integer sit sit arcu. Eget eget
                        ut risus id enim. At tortor leo risus diam lacus facilisi pulvinar sed. Convallis sed ipsum nisl turpis
                        lorem nisl sed est accumsan. Porttitor egestas dolor quam magna. Eget metus quis laoreet feugiat sit. Enim
                        id bibendum amet vitae. Elementum ultricies suspendisse magna aenean a bibendum feugiat quis dolor. Morbi a
                        est turpis dolor. Est ultricies integer lectus fermentum. Varius integer turpis urna est purus. Egestas
                        tincidunt massa felis faucibus interdum accumsan. Turpis viverra sagittis fames pharetra. Dictum libero
                        senectus fermentum nisl aliquam integer sed.</p>
                    <br/>
                    <p>Lorem ipsum dolor sit amet consectetur. Ac commodo at odio convallis integer sit sit arcu. Eget eget
                        ut risus id enim. At tortor leo risus diam lacus facilisi pulvinar sed. Convallis sed ipsum nisl turpis
                        lorem nisl sed est accumsan. Porttitor egestas dolor quam magna. Eget metus quis laoreet feugiat sit. Enim
                        id bibendum amet vitae. Elementum ultricies suspendisse magna aenean a bibendum feugiat quis dolor. Morbi a
                        est turpis dolor. Est ultricies integer lectus fermentum. Varius integer turpis urna est purus. Egestas
                        tincidunt massa felis faucibus interdum accumsan. Turpis viverra sagittis fames pharetra. Dictum libero
                        senectus fermentum nisl aliquam integer sed.</p>
                </Box>
                <Stack marginY="40px" gap="14px">
                    <Checkbox id="termsRead" isChecked={areTermsRead} onChange={setTermsRead.toggle}>
                        <Text as="span" fontSize="sm">Je reconnais avoir lu l’ensemble de la charte MarioNUM</Text>
                    </Checkbox>
                    <Checkbox id="acceptLiability" isChecked={areLiabilitiesAccepted}
                              onChange={setLiabilitiesAccepted.toggle}>
                        <Text as="span" fontSize="sm">
                            J’accepte les engagements indiqués dans la charte MarioNUM, ainsi que toutes les reponsabilités qu’impliquent l’utilisation de MarioNUM
                        </Text>
                    </Checkbox>
                </Stack>
            </Block>
            <Block backgroundColor="white" paddingY="16px" dockBottom>
                <HStack justifyContent="end">
                    <Button size="lg" variant="tertiary" color="gray.950">Annuler</Button>
                    <Button size="lg" variant="primary" disabled={!areTermsRead || !areLiabilitiesAccepted}>
                        Valider
                    </Button>
                </HStack>
            </Block>
        </>
    );
};
