import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';
import { Container, createTheme, ThemeProvider } from '@mui/material';
import { MyAppBar } from './components/MyAppBar';
import { FooterButtons } from './components/FooterButtons';

export const App = () => {
  
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme} disableTransitionOnChange noSsr>
      <Container sx={{ height: '100vh', m: 0, p: '0 !important' }}>
        <MyAppBar/>
        <FooterButtons />
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus viverra erat sed molestie. In eget orci fringilla erat rhoncus lacinia. Nunc congue malesuada ligula, non condimentum nisi auctor vitae. Quisque a magna sed sapien commodo scelerisque non eget ante. Praesent id diam in erat scelerisque condimentum. Nullam tincidunt dui felis, a placerat libero hendrerit et. In mauris massa, porta et pretium ac, venenatis et ipsum. Fusce vel tristique ipsum, quis euismod libero. Donec sit amet ligula ullamcorper, efficitur metus eu, ultrices dui. Aliquam et imperdiet mauris, vitae blandit lectus.

Vestibulum sodales justo non neque aliquet placerat. Nullam ac lacinia nulla. Sed aliquet ultricies velit ut euismod. Nulla sed nibh aliquet, sodales ex at, aliquam purus. Vestibulum varius enim magna, sed ornare ipsum hendrerit quis. Maecenas eget massa pretium, viverra dolor consequat, molestie diam. Nulla pulvinar ultricies tellus, eu porta urna fringilla at. Phasellus ultricies felis euismod, euismod sapien eget, rhoncus nibh. Donec ultrices nisi neque, ac varius nisi convallis ac. Aenean condimentum sodales ante, non vestibulum ligula aliquet quis. Sed ultricies lacinia justo varius posuere. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent aliquet, mauris nec consequat fermentum, risus felis viverra lectus, a pharetra ligula ante sollicitudin ipsum. Vestibulum feugiat quam id sapien fringilla, blandit luctus felis pharetra. Aliquam erat volutpat. Aenean ac sem in mauris luctus auctor.

Nam elementum nibh eget quam tincidunt, a lobortis eros facilisis. Suspendisse pretium libero ut mollis iaculis. Praesent congue ultrices quam vitae molestie. Integer ut fringilla nisi, et rhoncus purus. Nam vel placerat magna, sit amet vestibulum massa. Nullam suscipit nisl sed massa tincidunt rhoncus eu in dui. Phasellus ut convallis enim, nec scelerisque est.

Nullam quis cursus augue. Vivamus tellus justo, pulvinar vitae lectus ac, laoreet lacinia dolor. Fusce quis tempor arcu. Suspendisse pellentesque posuere posuere. Sed nec felis id lacus lobortis scelerisque at ut nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer rutrum magna a ipsum mollis volutpat. Sed fringilla libero id lorem tempus imperdiet. Nullam ultricies ornare nibh, sit amet sagittis nisi molestie at. Sed ullamcorper luctus blandit. Praesent orci nulla, dignissim eu eros at, ultrices sagittis eros. Mauris congue aliquet feugiat.

Sed volutpat aliquet ligula vehicula feugiat. Proin congue vehicula bibendum. Proin ut faucibus tortor. Sed vel mattis dui, quis sollicitudin augue. Pellentesque lacinia pellentesque magna et hendrerit. Donec nec nisi eget lorem vulputate interdum. Duis at tristique ante, non facilisis orci. Donec ex neque, vulputate sed bibendum in, congue sit amet dolor. Suspendisse ut diam ac risus fringilla tincidunt. Aliquam scelerisque risus et justo euismod consequat. Cras tincidunt nibh et quam semper, quis venenatis lectus auctor.

Nunc pretium vel odio eu vulputate. Duis consectetur urna viverra accumsan placerat. Nulla non dictum quam. Suspendisse potenti. Aenean ultrices tincidunt dui, sed pellentesque nisi bibendum id. Nullam congue ultricies leo, at varius dui scelerisque non. Vestibulum condimentum neque purus, non sollicitudin nisl eleifend eu. Aenean pulvinar ut massa in lacinia. Sed eget diam in felis dapibus vulputate in ut lectus. Morbi aliquet diam nisi, nec porttitor nibh eleifend id. Maecenas rhoncus tempus magna, at ullamcorper diam fringilla in. Mauris facilisis commodo ligula eget rutrum. Donec nec feugiat tellus. Sed commodo odio vitae dolor pellentesque, ac pharetra dui faucibus.

Suspendisse egestas, urna sed volutpat cursus, urna lacus lacinia ex, a pretium turpis odio eu neque. Quisque lobortis ligula eget ligula tempor, at blandit ligula blandit. Duis quis malesuada mi. Curabitur in erat vel ex vehicula eleifend eu eu lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi dignissim scelerisque vehicula. Maecenas ornare nisi finibus rutrum ornare. Praesent mattis vitae est non finibus. Nam a egestas sem. Praesent tempor justo congue dui aliquam, nec vestibulum erat sagittis. Sed ultricies elit efficitur enim vulputate, nec bibendum magna aliquet. Cras facilisis, lacus sed porta semper, enim nunc dignissim ligula, ac fringilla tortor metus in eros. Integer dapibus, libero at facilisis egestas, tellus est molestie elit, sit amet volutpat sem purus ut magna.

Nullam ullamcorper nisi ac risus dapibus ullamcorper. Quisque ac tellus sed leo imperdiet ultrices et eu libero. Ut ut neque aliquam, porttitor augue eu, aliquam eros. Cras non consequat est, in suscipit orci. Praesent sollicitudin placerat tincidunt. Donec ut ligula ut purus accumsan congue hendrerit vitae arcu. Aenean sodales eu erat eget posuere. Ut a elit ut orci auctor finibus eu vel nunc. Fusce quis ultrices lorem, vel convallis magna. Nunc augue massa, malesuada at tincidunt sed, sagittis a risus. In a magna bibendum, suscipit sapien at, congue sapien. Cras id dapibus mi, ac viverra risus. Sed maximus facilisis lorem vel aliquam. Morbi tincidunt turpis eget lacus imperdiet varius. Aliquam pellentesque sem eget ipsum euismod dapibus.

Phasellus dignissim congue commodo. Aenean dictum blandit molestie. Nam condimentum ullamcorper mauris vel ultrices. Quisque gravida leo placerat neque cursus suscipit. Mauris suscipit elementum pharetra. Quisque faucibus lacus pellentesque mi venenatis ullamcorper et malesuada libero. Suspendisse dictum arcu massa, vitae pellentesque nisl pharetra eu. Quisque fringilla sodales nisl, non maximus dolor fermentum eget. Duis commodo quam ut nulla blandit, vitae tempor sapien laoreet. Suspendisse at ultricies ex. Vestibulum sagittis metus a ligula bibendum cursus.

Mauris eu convallis turpis, et aliquam metus. Integer eu est ligula. Duis bibendum blandit hendrerit. Sed mauris neque, convallis id efficitur a, sollicitudin ut ex. Sed quis consequat ante, vel congue diam. Donec eget aliquet tellus, eget mattis ligula. In sit amet est ac augue eleifend bibendum eget iaculis tellus. Nunc scelerisque euismod enim et fringilla. Nunc lectus erat, mollis ut turpis quis, fermentum sagittis turpis. Pellentesque convallis sit amet dui eget fringilla. Proin ex mi, semper et commodo in, egestas vel nulla. Integer eros nisl, cursus sed dolor ut, ullamcorper interdum tortor. Nunc mi magna, facilisis lobortis elementum in, vestibulum id mauris.

Etiam et consequat leo, in dictum mi. Integer urna augue, lacinia et ex sed, dictum commodo orci. Nam et molestie metus, sit amet finibus justo. Pellentesque volutpat quam fermentum felis bibendum condimentum. Phasellus hendrerit blandit sapien, sit amet accumsan nulla bibendum nec. Praesent suscipit, mi eu tempor lobortis, magna ipsum elementum mi, vitae convallis mi leo ultricies tellus. Nulla tincidunt nibh non diam vestibulum, eu sodales metus sagittis.

Nunc fringilla volutpat nisl, a lacinia mauris gravida congue. Curabitur pellentesque justo nunc, et commodo odio fringilla quis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi maximus, lorem non dictum commodo, nisi erat finibus nulla, et sollicitudin tellus nulla non nisi. Proin turpis nibh, semper ac leo ut, semper interdum felis. Ut at iaculis ligula, vel laoreet est. In non laoreet ex. Aliquam at aliquet lectus, et gravida justo. Nam aliquet enim consectetur magna gravida venenatis. Phasellus tempor metus vestibulum, tempus ex ut, gravida augue. Vivamus a felis felis. Vivamus commodo libero magna, non ultricies turpis vestibulum sit amet. Cras odio orci, scelerisque eu mauris sit amet, faucibus varius odio. Sed eget lobortis mi. Nam rutrum, enim vel vehicula finibus, odio augue sodales nisl, non elementum ex dui in ligula.

Proin volutpat dui vitae tincidunt bibendum. Quisque dignissim tincidunt cursus. Aliquam erat volutpat. Vestibulum volutpat ornare sollicitudin. In hac habitasse platea dictumst. Nulla facilisi. Vestibulum sed ante volutpat, tincidunt eros semper, pulvinar quam. Aliquam erat volutpat. Ut non tristique augue. Nam eget consectetur elit, id porttitor ex. Phasellus sed purus vitae felis consectetur viverra. Mauris commodo tincidunt congue. Nulla ultrices purus eu dui efficitur, faucibus suscipit est tincidunt. Nam elementum pretium urna, eu efficitur metus tristique eget. Cras accumsan gravida convallis. Aenean semper urna a leo commodo feugiat.

Phasellus fringilla quis eros id ultrices. Nullam ut mauris vel dui fringilla porta ut ac felis. Cras tincidunt eget est vitae ullamcorper. Etiam id sapien rutrum, lobortis magna sit amet, efficitur quam. Morbi condimentum vulputate accumsan. Etiam ut leo placerat, cursus odio vehicula, fermentum augue. Phasellus in fermentum quam. Nullam i
        </div>
      </Container>
    </ThemeProvider>
  );
};
